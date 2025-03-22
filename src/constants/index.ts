import { Zap, Shield, Users, Star, Clock, Cloud, Lock } from "lucide-react";

import { MemberRole, InvitationStatus } from "@/types";

export const MEMBER_ROLE_COLORS = {
  [MemberRole.OWNER]: "text-orange-500 bg-orange-100",
  [MemberRole.ADMIN]: "text-red-500 bg-red-100",
  [MemberRole.MEMBER]: "text-blue-500 bg-blue-100",
};

export const INVITATION_STATUS_COLORS = {
  [InvitationStatus.ACCEPTED]: "text-green-500 bg-green-100",
  [InvitationStatus.PENDING]: "text-orange-500 bg-orange-100",
  [InvitationStatus.REJECTED]: "text-red-500 bg-red-100",
};

const PricingFeatures = {
  basic: [
    { icon: Users, text: "Up to 5 team members" },
    { icon: Cloud, text: "5GB storage space" },
    { icon: Clock, text: "Basic support (24h response)" },
    { icon: Lock, text: "Standard security" },
  ],
  premium: [
    { icon: Users, text: "Up to 50 team members" },
    { icon: Cloud, text: "100GB storage space" },
    { icon: Zap, text: "Priority support (4h response)" },
    { icon: Shield, text: "Advanced security features" },
    { icon: Star, text: "Custom integrations" },
  ],
  enterprise: [
    { icon: Users, text: "Unlimited team members" },
    { icon: Cloud, text: "Unlimited storage" },
    { icon: Zap, text: "24/7 dedicated support" },
    { icon: Shield, text: "Enterprise-grade security" },
    { icon: Star, text: "Custom solutions & API access" },
  ],
};
const PricingPlans = [
  {
    name: "Basic",
    title: "Free",
    description:
      "Perfect for individuals and small teams getting started with BL Sheet.",
    features: PricingFeatures.basic,
    highlights: [
      "No credit card required",
      "Basic collaboration tools",
      "Community support",
    ],
    button: {
      text: "Get Started",
      variant: "default" as const,
    },
  },
  {
    name: "Premium",
    title: "$10",
    period: "/month",
    popular: true,
    description:
      "Ideal for growing teams looking for advanced features and collaboration tools.",
    features: PricingFeatures.premium,
    highlights: [
      "All Basic features",
      "Priority support",
      "Advanced analytics",
    ],
    savings: "Save 20% with annual billing",
    button: {
      text: "Start Free Trial",
      variant: "default" as const,
    },
  },
  {
    name: "Enterprise",
    title: "Custom",
    description:
      "Built for large organizations needing scalability and custom solutions.",
    features: PricingFeatures.enterprise,
    highlights: [
      "All Premium features",
      "Custom contract",
      "Dedicated success manager",
    ],
    button: {
      text: "Contact Sales",
      variant: "default" as const,
    },
  },
];
const FAQ = [
  {
    q: "How does the 14-day free trial work?",
    a: "Start your trial with full access to all Premium features. No credit card required. Cancel anytime before the trial ends.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time from your account settings.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and offer enterprise billing options for larger organizations.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes! Save 20% when you choose annual billing on our Premium plan.",
  },
];

const TaskStatus = [
  "TODO",
  "IN_PROGRESS",
  "UNDER_REVIEW",
  "COMPLETED",
  "ARCHIVED",
];

export { FAQ, PricingPlans, TaskStatus };
