create table patients
(
    name varchar(100) not null,
    email varchar(50) not null,
    id int not null auto_increment,
    constraint id
        primary key (id)
    );

create table treatments
(
    id int not null auto_increment,
    name varchar(100) not null,
    constraint id
        primary key (id)
);

create table appointments
(
    id int not null auto_increment,
    date datetime not null,
    status varchar(20) not null,
    treatments int not null,
    patients int null,
    constraint id
        primary key (id),
    constraint patients
        foreign key (patients) references patients (id),
    constraint treatments
        foreign key (treatments) references treatments (id)
);

INSERT INTO `treatments` (`id`, `name`) VALUES
(1, 'consultation'),
(2, 'introductory session'),
(3, 'group therapy'),
(4, 'cognitive analytic therapy'),
(5, 'family therapy');