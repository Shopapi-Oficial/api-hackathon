ALTER TABLE "public"."carts" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
