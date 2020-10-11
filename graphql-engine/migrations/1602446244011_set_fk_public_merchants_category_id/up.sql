alter table "public"."merchants"
           add constraint "merchants_category_id_fkey"
           foreign key ("category_id")
           references "public"."merchant_categories"
           ("id") on update cascade on delete set null;
