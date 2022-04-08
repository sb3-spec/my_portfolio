import {
    React, Redis, MongoDB, 
    PostgreSQL, Node, Express, 
    Next, Django
} from './images'

const react = {
    name: 'React',
    icon: React
}
const next = {
    name: 'Next',
    icon: Next
}
const node = {
    name: 'Node',
    icon: Node
}
const mongodb = {
    name: 'MongoDB',
    icon: MongoDB,
}
const express = {
    name: 'Express', 
    icon: Express
}
const redis = {
    name: 'Redis',
    icon: Redis
}
const postgresql = {
    name: 'Postgresql',
    icon: PostgreSQL
}

const django = {
    name: 'Django',
    icon: Django
}

const frontEnd = [
    react, next
]

const backEnd = [
    node, express, django,
    mongodb, redis, postgresql
]


export {
    frontEnd, backEnd
}