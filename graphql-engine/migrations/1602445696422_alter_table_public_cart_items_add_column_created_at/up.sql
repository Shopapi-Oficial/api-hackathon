ALTER TABLE "public"."cart_items" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
