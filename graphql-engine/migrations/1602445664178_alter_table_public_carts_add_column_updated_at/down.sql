DROP TRIGGER IF EXISTS "set_public_carts_updated_at" ON "public"."carts";
ALTER TABLE "public"."carts" DROP COLUMN "updated_at";
