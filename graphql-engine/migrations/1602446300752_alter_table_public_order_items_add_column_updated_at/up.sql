ALTER TABLE "public"."order_items" ADD COLUMN "updated_at" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_order_items_updated_at"
BEFORE UPDATE ON "public"."order_items"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_order_items_updated_at" ON "public"."order_items" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
