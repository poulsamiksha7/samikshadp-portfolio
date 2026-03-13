import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <div 
      className="group flex flex-col overflow-hidden rounded-sm border transition-all hover:shadow-md" 
      style={{ borderColor: "rgba(26,26,26,0.12)", backgroundColor: "#FFFFFF" }}
    >
      {/* Image Container */}
      <div 
        className="relative w-full aspect-video overflow-hidden border-b" 
        style={{ borderColor: "rgba(26,26,26,0.12)", backgroundColor: "#E0DDD7" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em]" style={{ color: "rgba(26,26,26,0.5)" }}>
          Case Study
        </p>
        <h3 className="mb-3 text-lg font-semibold" style={{ color: "#1A1A1A" }}>
          {title}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "rgba(26,26,26,0.75)" }}>
          {description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-sm border px-2 py-1 text-[0.65rem] uppercase tracking-wider" 
              style={{ borderColor: "rgba(26,26,26,0.15)", color: "rgba(26,26,26,0.7)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* The Clickable Button */}
        <a 
          href={projectUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-auto inline-flex items-center text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-60" 
          style={{ color: "#1A1A1A" }}
        >
          View Project &rarr;
        </a>
      </div>
    </div>
  )
}