DROP TRIGGER IF EXISTS "set_public_cart_items_updated_at" ON "public"."cart_items";
ALTER TABLE "public"."cart_items" DROP COLUMN "updated_at";
