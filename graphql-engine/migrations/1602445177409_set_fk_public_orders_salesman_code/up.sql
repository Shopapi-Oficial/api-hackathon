alter table "public"."orders"
           add constraint "orders_salesman_code_fkey"
           foreign key ("salesman_code")
           references "public"."salesman"
           ("cod") on update cascade on delete restrict;
