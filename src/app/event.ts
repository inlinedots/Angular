export class Event {
  updatedAt: Date;
  organizer: {
    name: string;
    email: string;
    url: string;
  };

  isPublished: boolean;
  occurrences: [
    {
      startDate: Date;
      endDate: Date;
      place: {
        telephone: string;
        email: string;
        logo: string;
        disabilityAccess: true;
        latitude: number;
        longitude: number;
        tags: string;
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
  ];
  ticketPurchaseUrl: string;
  eventUrl: string;
  excerpt: string;
  tags: string;
  customTags: [string];
  description: string;
  image: string;
  images: [string];
  name: string;
  url: string;
  videoUrl: string;
  langcode: string;
}
