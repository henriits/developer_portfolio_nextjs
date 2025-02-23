import { FC, SVGProps } from "react";

import { cn } from "../ui/utils";

import AWS from "@/../public/img/icons/aws.svg";
import CSS from "@/../public/img/icons/css.svg";
import Docker from "@/../public/img/icons/docker.svg";
import Express from "@/../public/img/icons/express.svg";
import FramerMotion from "@/../public/img/icons/framermotion.svg";
import Git from "@/../public/img/icons/git.svg";
import Github from "@/../public/img/icons/github.svg";
import HTML from "@/../public/img/icons/html.svg";
import Instagram from "@/../public/img/icons/instagram.svg";
import JS from "@/../public/img/icons/javascript.svg";
import LinkedIn from "@/../public/img/icons/linkedin.svg";
import NextJs from "@/../public/img/icons/nextjs.svg";
import Node from "@/../public/img/icons/node.svg";
import NPM from "@/../public/img/icons/npm.svg";
import Postgres from "@/../public/img/icons/postgres.svg";
import Prisma from "@/../public/img/icons/prisma.svg";
import React from "@/../public/img/icons/react.svg";
import Tailwindcss from "@/../public/img/icons/tailwindcss.svg";
import TypeScript from "@/../public/img/icons/typescript.svg";
import VScode from "@/../public/img/icons/vscode.svg";
import Vue from "@/../public/img/icons/vue.svg";

type IconName =
    | "aws"
    | "css"
    | "docker"
    | "express"
    | "framerMotion"
    | "git"
    | "github"
    | "html"
    | "instagram"
    | "node"
    | "npm"
    | "postgres"
    | "vscode"
    | "vue"
    | "js"
    | "linkedIn"
    | "nextjs"
    | "react"
    | "typescript"
    | "tailwindcss"
    | "prisma";

const icons: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
    css: CSS,
    github: Github,
    html: HTML,
    js: JS,
    linkedIn: LinkedIn,
    nextjs: NextJs,
    react: React,
    typescript: TypeScript,
    tailwindcss: Tailwindcss,
    docker: Docker,
    express: Express,
    framerMotion: FramerMotion,
    git: Git,
    instagram: Instagram,
    node: Node,
    npm: NPM,
    postgres: Postgres,
    vscode: VScode,
    vue: Vue,
    aws: AWS,

    prisma: Prisma,
};

type IconProps = SVGProps<SVGSVGElement> & {
    name: IconName;
    size?: number | string;
};

const Icon = ({ name, size = 24, className, ...rest }: IconProps) => {
    const SVG = icons[name];

    return (
        <SVG className={cn(className)} width={size} height={size} {...rest} />
    );
};

export { Icon };
