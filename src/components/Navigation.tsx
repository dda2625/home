"use client"

import * as React from "react"

import { cn } from "../lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Airports & Charts",
    href: "/docs/primitives/alert-dialog",
    description:
      "full list of airports we support, their charts and procedures.",
  },
  {
    title: "Available Stands Map",
    href: "/docs/primitives/hover-card",
    description:
      "dont want to spawn ontop of another aircraft? Check out our map!",
  },
  {
    title: "Booking system",
    href: "/docs/primitives/progress",
    description:
      "We have an event that you want to attend? Book your slot here!",
  },
  {
    title: "Do's & Don'ts,",
    href: "/docs/primitives/scroll-area",
    description: "Local knowledge and tips for pilots flying in and out of our airports.",
  },
]

const controllers: { title: string; href: string; description: string }[] = [
  {
    title: "Documents & Procedures",
    href: "/docs/primitives/alert-dialog",
    description:
      "Our library of documents and procedures for controllers.",
  },
  {
    title: "Visiting Controllers",
    href: "/docs/primitives/hover-card",
    description:
      "Want to control at our facility? Find out how here!",
  },
  {
    title: "ATC Booking",
    href: "/docs/primitives/progress",
    description:
      "Want to annouce your ATC session? Book it here!",
  },
  {
    title: "Ratings & Endorsement",
    href: "/docs/primitives/progress",
    description:
      "Quickly get an overview of all endorsements and ratings.",
  }
]

const about: { title: string; href: string; description: string }[] = [
    {
      title: "Staff",
      href: "/docs/primitives/alert-dialog",
      description:
        "Current staff members and their roles.",
    },
    {
      title: "Policies",
      href: "/docs/primitives/hover-card",
      description:
        "Privacy, Data Protection, Cookie & more",
    },
    {
      title: "Donations",
      href: "/about/donations",
      description:
        "We are a non-profit and rely on donations to keep our services running.",
    },
    {
      title: "Contact us",
      href: "/docs/primitives/progress",
      description:
        "Quickly get an overview of all endorsements and ratings.",
    }
  ]

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Training
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We offer both traning for controllers and pilots for the VATSIM network.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                What you need to know to get started with VATSIM.
              </ListItem>
              <ListItem href="/docs/installation" title="TBA Title">
                TBA Desciption.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Need more?">
                Visit our wiki to find more information.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Pilots</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Controllers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {controllers.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {about.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
