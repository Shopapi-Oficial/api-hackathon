DROP TRIGGER IF EXISTS "set_public_product_comission_updated_at" ON "public"."product_comission";
ALTER TABLE "public"."product_comission" DROP COLUMN "updated_at";
