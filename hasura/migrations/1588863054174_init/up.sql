CREATE FUNCTION public.ispaid() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    UPDATE orders SET "isPaid"= true
    WHERE orders.id = NEW.order_id;
    RETURN new;
END;
$$;
CREATE FUNCTION public.isshipped() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    UPDATE orders SET "isShipped"= true
    WHERE orders.id = NEW.order_id;
    RETURN new;
END;
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.test() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
         INSERT INTO test_table(col1,col2,col3)
         VALUES(NEW.col1,NEW.col2,current_date);
    RETURN NEW;
END;
$$;
CREATE TABLE public."Zone" (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public."Zone_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Zone_id_seq" OWNED BY public."Zone".id;
CREATE TABLE public.addresses (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    city text NOT NULL,
    town text NOT NULL,
    street text NOT NULL,
    name text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    order_id uuid NOT NULL,
    "isinvoiceAddress" boolean DEFAULT true NOT NULL,
    surname text NOT NULL
);
CREATE TABLE public.categories (
    category_id integer NOT NULL,
    category text NOT NULL
);
CREATE SEQUENCE public.categories_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.categories_category_id_seq OWNED BY public.categories.category_id;
CREATE TABLE public.cities (
    id integer NOT NULL,
    city text NOT NULL
);
CREATE TABLE public.towns (
    city text NOT NULL,
    town text NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cities_id_seq OWNED BY public.towns.id;
CREATE SEQUENCE public.cities_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cities_id_seq1 OWNED BY public.cities.id;
CREATE TABLE public.images (
    image_id text NOT NULL,
    path text NOT NULL,
    product_id uuid NOT NULL
);
CREATE TABLE public.invoices (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    amount numeric NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    address_id text NOT NULL,
    updated_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public."itemTransactions" (
    id integer NOT NULL,
    price numeric NOT NULL,
    "paidPrice" numeric NOT NULL,
    "paymentTransactionId" text NOT NULL,
    "itemId" text NOT NULL,
    payment_id text NOT NULL
);
CREATE SEQUENCE public."itemTransactions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."itemTransactions_id_seq" OWNED BY public."itemTransactions".id;
CREATE TABLE public.messages (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    message text NOT NULL,
    subject text NOT NULL,
    CONSTRAINT email CHECK ((email ~* '\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z'::text)),
    CONSTRAINT message_length CHECK ((char_length(message) < 256))
);
CREATE SEQUENCE public.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.messages_id_seq OWNED BY public.messages.id;
CREATE TABLE public.order_items (
    order_id uuid NOT NULL,
    product_id uuid NOT NULL,
    qty integer NOT NULL
);
CREATE TABLE public.order_status (
    value text DEFAULT 'user'::text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.orders (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id text NOT NULL,
    amount numeric NOT NULL,
    notes text,
    created timestamp with time zone DEFAULT now() NOT NULL,
    "isPaid" boolean DEFAULT false NOT NULL,
    "isShipped" boolean DEFAULT false NOT NULL,
    invoice_id text,
    "isCancelled" boolean DEFAULT false NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    status text DEFAULT 'PLACED'::text NOT NULL,
    token text,
    "isGift" boolean DEFAULT false
);
CREATE TABLE public.payments (
    "paymentId" text NOT NULL,
    amount numeric NOT NULL,
    installments integer NOT NULL,
    "binNumber" integer NOT NULL,
    "lastFourDigits" integer NOT NULL,
    "fraudStatus" integer NOT NULL,
    "iyziCommissionFee" numeric NOT NULL,
    "iyziCommissionRateAmount" numeric NOT NULL,
    "paidPrice" numeric NOT NULL,
    "mdStatus" integer,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    token text NOT NULL,
    order_id uuid NOT NULL
);
CREATE TABLE public.product_categories (
    category_id integer NOT NULL,
    product_id uuid NOT NULL
);
CREATE TABLE public.product_tags (
    tag_id integer NOT NULL,
    product_id uuid NOT NULL
);
CREATE TABLE public.products (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    price numeric NOT NULL,
    discount integer NOT NULL,
    new boolean DEFAULT false NOT NULL,
    rating integer NOT NULL,
    "saleCount" integer DEFAULT 0 NOT NULL,
    "shortDescription" text NOT NULL,
    "fullDescription" text NOT NULL,
    stock integer NOT NULL,
    sku text NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL
);
CREATE TABLE public.shippings (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    track text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    order_id uuid NOT NULL
);
CREATE TABLE public.tags (
    tag_id integer NOT NULL,
    tag text NOT NULL
);
CREATE SEQUENCE public.tags_tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tags_tag_id_seq OWNED BY public.tags.tag_id;
CREATE TABLE public.test (
    id integer NOT NULL,
    text text NOT NULL
);
CREATE SEQUENCE public.test_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.test_id_seq OWNED BY public.test.id;
CREATE SEQUENCE public.tgs_tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tgs_tag_id_seq OWNED BY public.product_tags.tag_id;
CREATE TABLE public.user_roles (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone bigint NOT NULL,
    created timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    role text DEFAULT 'USER'::text NOT NULL,
    surname text NOT NULL
);
ALTER TABLE ONLY public."Zone" ALTER COLUMN id SET DEFAULT nextval('public."Zone_id_seq"'::regclass);
ALTER TABLE ONLY public.categories ALTER COLUMN category_id SET DEFAULT nextval('public.categories_category_id_seq'::regclass);
ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq1'::regclass);
ALTER TABLE ONLY public."itemTransactions" ALTER COLUMN id SET DEFAULT nextval('public."itemTransactions_id_seq"'::regclass);
ALTER TABLE ONLY public.messages ALTER COLUMN id SET DEFAULT nextval('public.messages_id_seq'::regclass);
ALTER TABLE ONLY public.tags ALTER COLUMN tag_id SET DEFAULT nextval('public.tags_tag_id_seq'::regclass);
ALTER TABLE ONLY public.test ALTER COLUMN id SET DEFAULT nextval('public.test_id_seq'::regclass);
ALTER TABLE ONLY public.towns ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);
ALTER TABLE ONLY public."Zone"
    ADD CONSTRAINT "Zone_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (category_id);
ALTER TABLE ONLY public.towns
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey1 PRIMARY KEY (id);
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (image_id);
ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."itemTransactions"
    ADD CONSTRAINT "itemTransactions_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (order_id, product_id);
ALTER TABLE ONLY public.order_status
    ADD CONSTRAINT order_status_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_order_id_key UNIQUE (order_id);
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY ("paymentId");
ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_pkey PRIMARY KEY (category_id, product_id);
ALTER TABLE ONLY public.product_tags
    ADD CONSTRAINT product_tags_pkey PRIMARY KEY (product_id, tag_id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_product_id_key UNIQUE (id);
ALTER TABLE ONLY public.shippings
    ADD CONSTRAINT shippings_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (tag_id);
ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER ispaid BEFORE INSERT OR UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.ispaid();
CREATE TRIGGER isshipped BEFORE INSERT OR UPDATE ON public.shippings FOR EACH ROW EXECUTE FUNCTION public.isshipped();
CREATE TRIGGER set_public_addresses_updated_at BEFORE UPDATE ON public.addresses FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_addresses_updated_at ON public.addresses IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_invoices_updated_at BEFORE UPDATE ON public.invoices FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_invoices_updated_at ON public.invoices IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_orders_updated_at ON public.orders IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_payments_updated_at BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_payments_updated_at ON public.payments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_products_updated_at ON public.products IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."itemTransactions"
    ADD CONSTRAINT "itemTransactions_payment_id_fkey" FOREIGN KEY (payment_id) REFERENCES public.payments("paymentId") ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_status_fkey FOREIGN KEY (status) REFERENCES public.order_status(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.payments
    ADD CONSTRAINT payments_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(category_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product_categories
    ADD CONSTRAINT product_categories_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product_tags
    ADD CONSTRAINT product_tags_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product_tags
    ADD CONSTRAINT product_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(tag_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.shippings
    ADD CONSTRAINT shippings_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_fkey FOREIGN KEY (role) REFERENCES public.user_roles(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
