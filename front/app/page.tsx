import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star } from "lucide-react"
import Layout from "@/components/layout";

const featuredPackages = [
  {
    id: 1,
    title: "Tropical Paradise Getaway",
    destination: "Maldives",
    price: 2499,
    duration: "7 days",
    rating: 4.8,
    image: "/maldives1.png",
    category: "Beach",
    availability: "Available",
  },
  {
    id: 2,
    title: "European Cultural Tour",
    destination: "Paris, Rome, Barcelona",
    price: 1899,
    duration: "10 days",
    rating: 4.6,
    image: "/paris1.png",
    category: "Cultural",
    availability: "Limited",
  },
  {
    id: 3,
    title: "Adventure Mountain Trek",
    destination: "Nepal Himalayas",
    price: 1299,
    duration: "14 days",
    rating: 4.9,
    image: "/himalayas1.png",
    category: "Adventure",
    availability: "Available",
  },
]

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Book amazing travel packages to destinations around the world. Create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Packages
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Travel Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular destinations and experiences, carefully curated for unforgettable journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="w-full h-48 object-cover" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      pkg.availability === "Available" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {pkg.availability}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{pkg.title}</CardTitle>
                    <Badge variant="secondary">{pkg.category}</Badge>
                  </div>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pkg.destination}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-600">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${pkg.price}</span>
                      <span className="text-gray-500 ml-1">per person</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/packages/${pkg.id}`} className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/packages">
              <Button size="lg" variant="outline">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TravelBook?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Destinations</h3>
              <p className="text-gray-600">Carefully selected destinations around the world for the perfect getaway.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides to make your journey memorable and safe.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Easy booking process with flexible dates and cancellation policies.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
