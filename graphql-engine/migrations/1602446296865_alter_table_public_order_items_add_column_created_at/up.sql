ALTER TABLE "public"."order_items" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
