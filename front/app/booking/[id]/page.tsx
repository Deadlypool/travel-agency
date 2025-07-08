"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, CreditCard, Shield, CheckCircle } from "lucide-react"

const packageData = {
  id: 1,
  title: "Tropical Paradise Getaway",
  destination: "Maldives",
  price: 2499,
  duration: "7 days",
  image: "/placeholder.svg?height=200&width=300",
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    guests: 2,
    travelDate: "",
    travelers: [
      { firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "" },
      { firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "" },
    ],
    specialRequests: "",
    emergencyContact: {
      name: "",
      phone: "",
      relationship: "",
    },
    paymentMethod: "card",
    cardDetails: {
      number: "",
      expiry: "",
      cvv: "",
      name: "",
    },
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const updateBookingData = (field: string, value: any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const updateTraveler = (index: number, field: string, value: string) => {
    const updatedTravelers = [...bookingData.travelers]
    updatedTravelers[index] = { ...updatedTravelers[index], [field]: value }
    setBookingData((prev) => ({ ...prev, travelers: updatedTravelers }))
  }

  const totalPrice = packageData.price * bookingData.guests

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    setStep(4) // Go to confirmation
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TravelBook
            </Link>
            <div className="text-sm text-gray-600">Booking: {packageData.title}</div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {[
              { step: 1, title: "Travel Details" },
              { step: 2, title: "Traveler Info" },
              { step: 3, title: "Payment" },
              { step: 4, title: "Confirmation" },
            ].map((item) => (
              <div key={item.step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= item.step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > item.step ? <CheckCircle className="w-5 h-5" /> : item.step}
                </div>
                <span className={`ml-2 text-sm ${step >= item.step ? "text-blue-600" : "text-gray-500"}`}>
                  {item.title}
                </span>
                {item.step < 4 && <div className="w-16 h-px bg-gray-300 ml-4"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Travel Details</CardTitle>
                  <CardDescription>Select your travel preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <select
                      id="guests"
                      value={bookingData.guests}
                      onChange={(e) => updateBookingData("guests", Number.parseInt(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="travelDate">Travel Date</Label>
                    <Input
                      id="travelDate"
                      type="date"
                      value={bookingData.travelDate}
                      onChange={(e) => updateBookingData("travelDate", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                      value={bookingData.specialRequests}
                      onChange={(e) => updateBookingData("specialRequests", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full">
                    Continue to Traveler Information
                  </Button>
                </CardContent>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Traveler Information</CardTitle>
                  <CardDescription>Please provide details for all travelers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Array.from({ length: bookingData.guests }).map((_, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Traveler {index + 1}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`firstName-${index}`}>First Name</Label>
                          <Input
                            id={`firstName-${index}`}
                            value={bookingData.travelers[index]?.firstName || ""}
                            onChange={(e) => updateTraveler(index, "firstName", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`lastName-${index}`}>Last Name</Label>
                          <Input
                            id={`lastName-${index}`}
                            value={bookingData.travelers[index]?.lastName || ""}
                            onChange={(e) => updateTraveler(index, "lastName", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`email-${index}`}>Email</Label>
                          <Input
                            id={`email-${index}`}
                            type="email"
                            value={bookingData.travelers[index]?.email || ""}
                            onChange={(e) => updateTraveler(index, "email", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`phone-${index}`}>Phone</Label>
                          <Input
                            id={`phone-${index}`}
                            value={bookingData.travelers[index]?.phone || ""}
                            onChange={(e) => updateTraveler(index, "phone", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`dob-${index}`}>Date of Birth</Label>
                          <Input
                            id={`dob-${index}`}
                            type="date"
                            value={bookingData.travelers[index]?.dateOfBirth || ""}
                            onChange={(e) => updateTraveler(index, "dateOfBirth", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="emergencyName">Name</Label>
                        <Input
                          id="emergencyName"
                          value={bookingData.emergencyContact.name}
                          onChange={(e) =>
                            updateBookingData("emergencyContact", {
                              ...bookingData.emergencyContact,
                              name: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">Phone</Label>
                        <Input
                          id="emergencyPhone"
                          value={bookingData.emergencyContact.phone}
                          onChange={(e) =>
                            updateBookingData("emergencyContact", {
                              ...bookingData.emergencyContact,
                              phone: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyRelationship">Relationship</Label>
                        <Input
                          id="emergencyRelationship"
                          value={bookingData.emergencyContact.relationship}
                          onChange={(e) =>
                            updateBookingData("emergencyContact", {
                              ...bookingData.emergencyContact,
                              relationship: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="flex-1">
                      Continue to Payment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                  <CardDescription>Secure payment processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Credit Card Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          value={bookingData.cardDetails.name}
                          onChange={(e) =>
                            updateBookingData("cardDetails", {
                              ...bookingData.cardDetails,
                              name: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={bookingData.cardDetails.number}
                          onChange={(e) =>
                            updateBookingData("cardDetails", {
                              ...bookingData.cardDetails,
                              number: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Expiry Date</Label>
                          <Input
                            id="cardExpiry"
                            placeholder="MM/YY"
                            value={bookingData.cardDetails.expiry}
                            onChange={(e) =>
                              updateBookingData("cardDetails", {
                                ...bookingData.cardDetails,
                                expiry: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvv">CVV</Label>
                          <Input
                            id="cardCvv"
                            placeholder="123"
                            value={bookingData.cardDetails.cvv}
                            onChange={(e) =>
                              updateBookingData("cardDetails", {
                                ...bookingData.cardDetails,
                                cvv: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="street">Street Address</Label>
                        <Input
                          id="street"
                          value={bookingData.billingAddress.street}
                          onChange={(e) =>
                            updateBookingData("billingAddress", {
                              ...bookingData.billingAddress,
                              street: e.target.value,
                            })
                          }
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={bookingData.billingAddress.city}
                            onChange={(e) =>
                              updateBookingData("billingAddress", {
                                ...bookingData.billingAddress,
                                city: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={bookingData.billingAddress.state}
                            onChange={(e) =>
                              updateBookingData("billingAddress", {
                                ...bookingData.billingAddress,
                                state: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            value={bookingData.billingAddress.zipCode}
                            onChange={(e) =>
                              updateBookingData("billingAddress", {
                                ...bookingData.billingAddress,
                                zipCode: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            value={bookingData.billingAddress.country}
                            onChange={(e) =>
                              updateBookingData("billingAddress", {
                                ...bookingData.billingAddress,
                                country: e.target.value,
                              })
                            }
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={bookingData.agreeToTerms}
                        onCheckedChange={(checked) => updateBookingData("agreeToTerms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={bookingData.subscribeNewsletter}
                        onCheckedChange={(checked) => updateBookingData("subscribeNewsletter", checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for travel deals and updates
                      </Label>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1" disabled={!bookingData.agreeToTerms}>
                      Complete Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === 4 && (
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
                  <CardDescription>
                    Your booking has been successfully processed. You will receive a confirmation email shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Booking Reference</h3>
                    <p className="text-2xl font-mono font-bold text-blue-600">TB-2024-001234</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span>{packageData.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Destination:</span>
                      <span>{packageData.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travel Date:</span>
                      <span>{bookingData.travelDate || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests:</span>
                      <span>{bookingData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Amount:</span>
                      <span className="text-blue-600">${totalPrice}</span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link href="/dashboard/bookings" className="flex-1">
                      <Button className="w-full">View My Bookings</Button>
                    </Link>
                    <Link href="/packages">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Browse More Packages
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={packageData.image || "/placeholder.svg"}
                    alt={packageData.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">{packageData.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {packageData.destination}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{packageData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel Date:</span>
                    <span>{bookingData.travelDate || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Price per person:</span>
                    <span>${packageData.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Number of guests:</span>
                    <span>{bookingData.guests}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-blue-600">${totalPrice}</span>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Secure payment processing
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
