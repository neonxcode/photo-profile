"use client"

import { ImageZoom } from '@/components/ui/image-zoom/image-zoom';
import { cn } from "@/lib/utils";
import Image from "next/image"
import { Camera, Instagram, Mail, MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const photoCategories = {
  street: [
    { id: 1, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 2, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 3, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 4, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 5, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 6, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 7, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 8, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 9, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 10, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 11, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 12, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 13, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 14, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 15, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 16, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 17, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 18, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 19, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 20, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 21, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 22, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 23, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 24, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 25, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 26, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 27, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 28, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 29, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 30, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 31, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 32, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 33, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 34, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 35, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 36, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 37, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 38, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 39, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 40, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
  ],
  people: [
    { id: 9, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 10, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 11, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 12, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 13, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 14, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 15, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 16, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 17, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 18, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 19, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 20, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 21, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 22, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 23, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 24, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 25, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 26, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 27, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 28, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 29, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 30, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 31, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 32, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 33, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 34, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 35, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 36, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 37, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 38, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 39, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 40, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
  ],
  abstract: [
    { id: 1, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 2, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 3, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 4, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 5, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 6, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 7, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 8, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 9, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 10, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 11, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 12, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 13, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 14, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 15, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 16, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 17, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 18, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 19, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 20, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 21, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 22, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 23, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 24, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 25, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 26, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 27, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 28, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 29, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 30, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 31, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 32, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 33, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 34, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 35, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 36, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 37, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 38, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 39, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 40, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
  ],
  outdoor: [
    { id: 1, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 2, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 3, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 4, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 5, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 6, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 7, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 8, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 9, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 10, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 11, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 12, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 13, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 14, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 15, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 16, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 17, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 18, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 19, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 20, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 21, src: "/images/img1.jpg", alt: "Street photography", width: 300, height: 400 },
    { id: 22, src: "/images/img2.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 23, src: "/images/img3.jpeg", alt: "Street photography ", width: 400, height: 300 },
    { id: 24, src: "/images/img4.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 25, src: "/images/img5.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 26, src: "/images/img6.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 27, src: "/images/img7.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 28, src: "/images/img8.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 29, src: "/images/img9.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 30, src: "/images/img10.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 31, src: "/images/img11.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 32, src: "/images/img12.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 33, src: "/images/img13.jpeg", alt: "Street photography ", width: 300, height: 400 },
    { id: 34, src: "/images/img14.jpg", alt: "Street photography ", width: 400, height: 500 },
    { id: 35, src: "/images/img15.jpg", alt: "Street photography ", width: 400, height: 300 },
    { id: 36, src: "/images/img16.jpg", alt: "Street photography ", width: 400, height: 600 },
    { id: 37, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 38, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
    { id: 39, src: "/images/img17.jpg", alt: "Street photography ", width: 300, height: 400 },
    { id: 40, src: "/images/img18.jpg", alt: "Street photography ", width: 350, height: 500 },
  ],
}

export default function PhotographerPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl md:text-2xl font-light tracking-wider">neonxcode</h1>
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-light tracking-wide">PHOTOGRAPHER</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 pb-24 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center py-8 sm:py-12 md:py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin tracking-widest mb-2 sm:mb-4">
              VISUAL
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light tracking-widest text-gray-400">
              STORYTELLER
            </h3>
          </div>

          {/* Photo Gallery Tabs */}
          <Tabs defaultValue="street" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-transparent border-b border-gray-800 rounded-none h-auto p-0 gap-0">
              <TabsTrigger
                value="street"
                className="data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white rounded py-3 sm:py-4 text-xs sm:text-sm font-light tracking-widest text-white transition-colors"
              >
                STREET
              </TabsTrigger>
              <TabsTrigger
                value="people"
                className="data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white rounded py-3 sm:py-4 text-xs sm:text-sm font-light tracking-widest text-white transition-colors"
              >
                PEOPLE
              </TabsTrigger>
              <TabsTrigger
                value="abstract"
                className="data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white rounded py-3 sm:py-4 text-xs sm:text-sm font-light tracking-widest text-white transition-colors col-span-2 sm:col-span-1"
              >
                ABSTRACT
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-white rounded py-3 sm:py-4 text-xs sm:text-sm font-light tracking-widest text-white transition-colors col-span-2 sm:col-span-1"
              >
                OUTDOOR
              </TabsTrigger>
            </TabsList>

            {Object.entries(photoCategories).map(([category, photos]) => (
              <TabsContent key={category} value={category} className="mt-6 sm:mt-8 md:mt-12">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 sm:gap-2 space-y-2 sm:space-y-2"> 
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="group relative overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-500 cursor-pointer break-inside-avoid mb-2 sm:mb-2"
                    >
                    <ImageZoom
                    backdropClassName={cn('[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80')}> 
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        className="w-full h-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        unoptimized
                        // priority={photo.id <= 6}
                        // priority={true}
                      />
                      </ImageZoom>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      {/* About Me Button - Fixed at bottom center */}
      <div 
    //   className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50" 
      className="fixed bottom-4 sm:bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-40" 
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
            //   className="bg-black/90 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-light tracking-widest text-xs sm:text-sm"
                 className="bg-black/90 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded font-light tracking-widest text-lg sm:text-xl"
            >
              ABOUT ME
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-black border-gray-800 text-white max-w-[95vw] sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto sm:mx-4">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-light tracking-widest text-center mb-4 sm:mb-6 md:mb-8">
                neonxcode
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 sm:space-y-6 px-2 sm:px-4">
              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gray-800 flex items-center justify-center">
                  <Camera className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-gray-400" />
                </div>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-gray-300 px-2">
                  Visual storyteller capturing the essence of urban life, human emotion, and abstract beauty through the
                  lens. Based in Earth with over 100 years of experience in contemporary photography.
                </p>

                <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-gray-400 px-2">
                  My work explores the intersection of light, shadow, and human experience. Each photograph tells a
                  story, frozen in time yet alive with emotion and meaning.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-8 pt-4 sm:pt-6">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-light">new delhi, INDIA</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-light">neonxcodez@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-light">@neonxcode</span>
                </div>
              </div>

              <div className="text-center pt-3 sm:pt-4">
                <p className="text-xs font-light text-gray-500 tracking-widest px-2">
                  "PHOTOGRAPHY IS THE POETRY OF THE FROZEN MOMENT"
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}