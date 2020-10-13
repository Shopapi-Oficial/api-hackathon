ALTER TABLE "public"."orders" ADD COLUMN "salesman_code" text;
ALTER TABLE "public"."orders" ALTER COLUMN "salesman_code" DROP NOT NULL;
ALTER TABLE "public"."orders" ADD CONSTRAINT orders_salesman_code_fkey FOREIGN KEY (salesman_code) REFERENCES "public"."salesman" (cod) ON DELETE restrict ON UPDATE cascade;
