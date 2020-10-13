alter table "public"."orders" add foreign key ("salesman_code") references "public"."salesman"("cod") on update cascade on delete restrict;
