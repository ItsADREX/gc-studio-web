-- Run this in your Supabase SQL Editor

-- Products table
create table if not exists products (
  id text primary key,
  name text not null,
  description text not null,
  price numeric default 0,
  category text not null,
  images text[] not null default '{}',
  featured boolean default false,
  in_stock boolean default true,
  tags text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table products enable row level security;

-- Allow public read
create policy "Public can read products"
  on products for select
  using (true);

-- Allow authenticated users to manage products (admin only via magic link)
create policy "Authenticated users can insert products"
  on products for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update products"
  on products for update
  using (auth.role() = 'authenticated');

create policy "Authenticated users can delete products"
  on products for delete
  using (auth.role() = 'authenticated');

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger products_updated_at
  before update on products
  for each row execute function update_updated_at();
