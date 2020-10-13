ALTER TABLE "public"."salesman" ADD COLUMN "id" int4;
ALTER TABLE "public"."salesman" ALTER COLUMN "id" DROP NOT NULL;
ALTER TABLE "public"."salesman" ALTER COLUMN "id" SET DEFAULT nextval('salesman_id_seq'::regclass);
