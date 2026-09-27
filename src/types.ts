/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Modality {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  tagLine: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  role: string;
  comment: string;
  avatarUrl: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}
