create schema ufdbk;

create table ufdbk.feedback (
  id serial primary key,
  subject varchar not null,
  description varchar,
  category varchar,
  importance varchar
);

create table ufdbk.attachement (
  id serial primary key,
  feedabck_id integer references ufdbk.feedback (id),
  attachement bytea not null,
  content_type varchar not null
);
