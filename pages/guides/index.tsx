import GuideLayout from "@/frontend/components/layout/guide";
import Link from "next/link";


export default function GuideOverviewPage() {
  return (
    <GuideLayout
      title="Guides"
      description="Explore our guides and examples how to use dazzle.ai"
      breadcrumbs={[
        { title: "Guides", href: '/guides' }
      ]}
      canonical='/guides'
    >
      <Link href='/guides/interactive-guide-to-stable-diffusion-steps-parameter'><a>Interactive guide to Stable Diffusion steps parameter</a></Link><br />
      <Link href='/guides/interactive-guide-to-stable-diffusion-guidance-scale-parameter'><a>Guide to Stable Diffusion cfg scale parameter</a></Link><br />
      <Link href='/guides/guide-to-negative-prompts-in-stable-diffusion'><a>Guide to negative prompts in Stable Diffusion</a></Link><br />
      <Link href='/guides/guide-to-seed-parameter-in-stable-diffusion'><a>Guide to seed parameter in Stable Diffusion</a></Link><br />

      <Link href='/guides/inpainting-with-stable-diffusion'><a>Guide to Inpainting with Stable Diffusion</a></Link><br />
      <Link href='/guides/outpainting-with-stable-diffusion'><a>Guide to Stable Diffusion Outpainting</a></Link>

    </GuideLayout>
  )
}