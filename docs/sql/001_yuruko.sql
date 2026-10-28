-- ゆるこ アプリ用テーブル（OHinasamaと同じSupabaseプロジェクトに追加）
-- Supabase ダッシュボード → 左メニュー「SQL Editor」→ New query に全文を貼り付けて「Run」
-- くじ・お店・ニュースを1つのテーブルに kind で分けて入れます（写真はJSONの中に縮小JPEGで保存）

create table if not exists public.yuruko_items (
  id    bigint primary key,
  kind  text  not null,          -- kuji / shops / news
  data  jsonb not null default '{}'::jsonb
);

-- OHinasamaの他テーブルと同じく、公開キー(anon)で読み書き可（おままごと用途）
alter table public.yuruko_items enable row level security;
drop policy if exists "anon all" on public.yuruko_items;
create policy "anon all" on public.yuruko_items for all to anon using (true) with check (true);

-- リアルタイム更新（スタッフが追加したらお客側にもすぐ出る）
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    begin alter publication supabase_realtime add table public.yuruko_items; exception when duplicate_object then null; end;
  end if;
end $$;
