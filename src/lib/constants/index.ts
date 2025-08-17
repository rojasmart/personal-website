import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import GithubIcon from '@/components/ui/icons/github.astro'
import BehanceIcon from '@/components/ui/icons/behance.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Frontend",
    href: "/frontend",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/Louai-Zokerburg",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/louai-boumediene-018919262/",
  },
  {
    name: 'Behance',
    icon: BehanceIcon,
    url: "https://www.behance.net/seuusuario",
  },
];