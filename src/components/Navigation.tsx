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
} from "./ui/Navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Airports & Charts",
    href: "https://wiki.vatsim-scandinavia.org/shelves/pilots",
    description:
      "full list of airports we support, their charts and procedures.",
  },
  {
    title: "Available Stands Map",
    href: "https://stands.vatsim-scandinavia.org/",
    description:
      "dont want to spawn ontop of another aircraft? Check out our map!",
  },
  {
    title: "Booking system",
    href: "https://booking.vatsim-scandinavia.org/",
    description:
      "We have an event that you want to attend? Book your slot here!",
  },
  {
    title: "Do's & Don'ts,",
    href: "/dos-and-donts/",
    description: "Local knowledge and tips for pilots flying in and out of our airports.",
  },
]

const controllers: { title: string; href: string; description: string }[] = [
  {
    title: "Documents & Procedures",
    href: "https://wiki.vatsim-scandinavia.org/",
    description:
      "Our library of documents and procedures for controllers.",
  },
  {
    title: "Visiting Controllers",
    href: "/visiting",
    description:
      "Want to control at our facility? Find out how here!",
  },
  {
    title: "ATC Booking",
    href: "https://cc.vatsim-scandinavia.org/booking",
    description:
      "Want to annouce your ATC session? Book it here!",
  },
  {
    title: "Ratings & Endorsement",
    href: "https://cc.vatsim-scandinavia.org/endorsements/solos",
    description:
      "Quickly get an overview of all endorsements and ratings.",
  }
]

const about: { title: string; href: string; description: string }[] = [
    {
      title: "Staff",
      href: "/about/staff",
      description:
        "Current staff members and their roles.",
    },
    {
      title: "Policies",
      href: "https://wiki.vatsim-scandinavia.org/books/privacy-policies",
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
      href: "/about/contact",
      description:
        "Quickly get an overview of all endorsements and ratings.",
    }
  ]

export default function Navigation() {
  return (
    <NavigationMenu >
      <NavigationMenuList className="flex flex-col md:flex-row w-full items-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-radar-dark dark:bg-radar-light bg-cover from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                    href="https://cc.vatsim-scandinavia.org/training/apply" target="_blank"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ATC Training
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We offer the best traning for controllers on the VATSIM network.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://vatsim.net/docs/basics/getting-started" title="Introduction">
                What you need to know to get started with VATSIM.
              </ListItem>
              <ListItem href="https://wiki.vatsim-scandinavia.org/shelves/pilot-training" title="Pilot Traning">
                We also have a Pilot training program! Check it out here.
              </ListItem>
              <ListItem href="https://wiki.vatsim-scandinavia.org/" title="Need more?">
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
