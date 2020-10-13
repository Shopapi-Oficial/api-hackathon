alter table "public"."salesman" drop constraint "salesman_pkey";
alter table "public"."salesman"
    add constraint "salesman_pkey" 
    primary key ( "cod" );
