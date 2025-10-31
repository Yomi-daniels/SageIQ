import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className= "border-t-2 border-t-slate-100 bg-black ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Brand</h3>
            <p className="text-sm text-muted-foreground">Building amazing products to help you succeed.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">© {currentYear} Brand. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
