-- Supabase schema for NEW-GenX decentralized marketplace

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  display_name text not null,
  wallet_address text unique,
  verified_seller boolean default false,
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists stores (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  owner_id uuid references users(id) on delete cascade,
  banner_url text,
  verified boolean default false,
  created_at timestamptz default now()
);

create table if not exists categories (
  id serial primary key,
  name text unique not null,
  type text not null,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  short_description text,
  price text not null,
  currency text not null,
  category text not null,
  product_type text not null,
  store_id uuid references stores(id) on delete set null,
  seller text,
  available integer default 0,
  rating numeric default 0,
  image_url text,
  verified boolean default false,
  created_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete set null,
  total_amount text not null,
  status text not null,
  payment_method text not null,
  product_ids text[] not null,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete set null,
  product_id uuid references products(id) on delete cascade,
  rating integer not null,
  comment text,
  created_at timestamptz default now()
);

create table if not exists wallet_connections (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  wallet_address text not null,
  provider text not null,
  verified boolean default false,
  connected_at timestamptz default now()
);

create table if not exists transactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete set null,
  order_id uuid references orders(id) on delete set null,
  wallet_address text,
  amount text not null,
  mint_address text,
  status text not null,
  created_at timestamptz default now()
);
