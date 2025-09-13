interface StatItem {
  value: string;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  valueColor?: string;
  descColor?: string;
}

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats?: StatItem[];
  // Support for direct content passing from Astro
  content?: {
    title?: string;
    description?: string;
    stats?: StatItem[];
  };
}

export default function StatsSection({ title, description, stats, content }: StatsSectionProps) {
  // Use content prop if provided, otherwise use individual props
  const sectionTitle = content?.title || title;
  const sectionDescription = content?.description || description;
  const sectionStats = content?.stats || stats || [];

  if (!sectionStats.length) {
    return null;
  }

  return (
    <div className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(sectionTitle || sectionDescription) && (
          <div className="mx-auto max-w-2xl lg:mx-0">
            {sectionTitle && (
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-content-primary sm:text-5xl">
                {sectionTitle}
              </h2>
            )}
            {sectionDescription && (
              <p className="mt-6 text-base/7 text-content-secondary">
                {sectionDescription}
              </p>
            )}
          </div>
        )}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {sectionStats.map((stat, index) => (
            <div 
              key={index}
              className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 ${
                stat.bgColor || 'bg-brand-900'
              } ${
                index === 0 ? 'sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start' :
                index === 1 ? 'sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44' :
                'sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28'
              }`}
            >
              <p className={`flex-none text-3xl font-bold tracking-tight ${
                stat.valueColor || 'text-orange-500'
              }`}>
                {stat.value}
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className={`text-lg font-semibold tracking-tight ${
                  stat.textColor || 'text-content-primary'
                }`}>
                  {stat.title}
                </p>
                <p className={`mt-2 text-base/7 ${
                  stat.descColor || 'text-content-secondary'
                }`}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}