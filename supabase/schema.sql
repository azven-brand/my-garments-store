
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text default '',
  images text[] default '{}',
  category text default 'Men',
  price numeric not null,
  sale_price numeric,
  stock int default 0,
  is_active boolean default true,
  created_at timestamp with time zone default now()
);
alter table products enable row level security;
create policy "Public read active products" on products for select to public using (is_active = true);
