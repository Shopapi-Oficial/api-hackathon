DROP TRIGGER IF EXISTS "set_public_order_items_updated_at" ON "public"."order_items";
ALTER TABLE "public"."order_items" DROP COLUMN "updated_at";
