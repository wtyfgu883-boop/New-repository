"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageSkeletonProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  blurDataURL?: string
}

export function ImageSkeleton({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  blurDataURL 
}: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Скелетон */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
          style={{ width, height }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Картинка */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
      
      {/* Ошибка загрузки */}
      {hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500"
          style={{ width, height }}
        >
          <span className="text-sm">Ошибка загрузки</span>
        </div>
      )}
    </div>
  )
}
