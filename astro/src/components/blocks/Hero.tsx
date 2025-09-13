import type { HeroContent } from '../../content/hero';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  return (
    <div className="bg-surface">
      <div className="relative isolate px-8 pt-14 lg:px-8">
        {/* Background gradient blur - Top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-400 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-container py-32 sm:py-48 lg:py-56">
          {/* Announcement banner */}
          {content.announcement && (
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-content-secondary ring-1 ring-brand-600 hover:ring-brand-500 transition-colors">
                {content.announcement.text}{' '}
                <a href={content.announcement.linkUrl} className="font-semibold text-orange-500 hover:text-orange-400 transition-colors">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {content.announcement.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}

          {/* Hero content */}
          <div className="text-center">
            <h1 className="text-balance text-5xl tracking-tight text-content-primary sm:text-7xl">
              {content.headline}
            </h1>
            <p className="mt-8 text-pretty text-lg text-content-secondary sm:text-xl leading-8">
              {content.description}
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href={content.primaryButton.url}
                className="rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-content-inverse shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
              >
                {content.primaryButton.text}
              </a>
              <a 
                href={content.secondaryButton.url} 
                className="text-sm font-semibold leading-6 text-content-primary hover:text-content-secondary transition-colors"
              >
                {content.secondaryButton.text} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Background gradient blur - Bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-300 to-orange-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}