DROP TRIGGER IF EXISTS "set_public_merchants_updated_at" ON "public"."merchants";
ALTER TABLE "public"."merchants" DROP COLUMN "updated_at";
