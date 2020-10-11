DROP TRIGGER IF EXISTS "set_public_salesman_updated_at" ON "public"."salesman";
ALTER TABLE "public"."salesman" DROP COLUMN "updated_at";
