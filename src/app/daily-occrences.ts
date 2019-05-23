export class DailyOccurrence {
  event: {
    organizer: {};
    ticketPurchaseUrl: string;
    eventUrl: string;
    excerpt: string;
    tags: string;
    description: string;
    image: string;
    images: [string];
    name: string;
    url: string;
    videoUrl: string;
    langcode: string;
  };
  startDate: Date;
  endDate: Date;
  place: {
    telephone: string;
    email: string;
    logo: string;
    disabilityAccess: true;
    addressCountry: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    streetAddress: string;
    latitude: number;
    longitude: number;
    description: string;
    image: string;
    images: [string];
    name: string;
    url: string;
    videoUrl: string;
    langcode: string;
  };
  room: string;
  ticketPriceRange: string;
  eventStatusText: string;
  eventSalesStatus: string;
}
