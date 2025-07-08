"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Star, Search } from "lucide-react"

const allPackages = [
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
    maxGuests: 4,
    description: "Luxury resort experience with overwater bungalows",
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
    maxGuests: 8,
    description: "Explore the rich history and culture of Europe",
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
    maxGuests: 6,
    description: "Epic trekking adventure in the world's highest mountains",
  },
  {
    id: 4,
    title: "Safari Wildlife Experience",
    destination: "Kenya & Tanzania",
    price: 3299,
    duration: "12 days",
    rating: 4.7,
    image: "/kenya1.png",
    category: "Wildlife",
    availability: "Available",
    maxGuests: 6,
    description: "Witness the great migration and Big Five animals",
  },
  {
    id: 5,
    title: "City Lights & Nightlife",
    destination: "Tokyo, Japan",
    price: 1799,
    duration: "8 days",
    rating: 4.5,
    image: "/tokyo1.png",
    category: "City",
    availability: "Available",
    maxGuests: 4,
    description: "Experience modern Japan's vibrant culture and cuisine",
  },
  {
    id: 6,
    title: "Luxury Cruise Mediterranean",
    destination: "Mediterranean Sea",
    price: 4299,
    duration: "15 days",
    rating: 4.8,
    image: "/mediterranean1.png",
    category: "Cruise",
    availability: "Limited",
    maxGuests: 2,
    description: "Luxury cruise visiting multiple Mediterranean ports",
  },
]

const categories = ["All", "Beach", "Cultural", "Adventure", "Wildlife", "City", "Cruise"]
const sortOptions = [
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "duration", label: "Duration" },
]

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("price-low")
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

  const filteredPackages = allPackages
    .filter((pkg) => {
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory
      const matchesPrice =
        (!priceRange.min || pkg.price >= Number.parseInt(priceRange.min)) &&
        (!priceRange.max || pkg.price <= Number.parseInt(priceRange.max))
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "duration":
          return Number.parseInt(a.duration) - Number.parseInt(b.duration)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TravelBook
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/packages" className="text-blue-600 font-medium">
                Packages
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/dashboard">
                <Button>Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Travel Packages</h1>
          <p className="text-lg text-gray-600">Discover amazing destinations and book your perfect getaway</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <div className="flex space-x-2">
              <Input
                placeholder="Min price"
                type="number"
                value={priceRange.min}
                onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))}
              />
              <Input
                placeholder="Max price"
                type="number"
                value={priceRange.max}
                onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))}
              />
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPackages.length} of {allPackages.length} packages
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
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
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">Max {pkg.maxGuests}</span>
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
              <CardFooter className="flex space-x-2">
                <Link href={`/packages/${pkg.id}`} className="flex-1">
                  <Button className="w-full">View Details</Button>
                </Link>
                <Link href={`/booking/${pkg.id}`}>
                  <Button variant="outline">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
                setPriceRange({ min: "", max: "" })
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
