# Onboarding & Auth Setup

This document explains the minimal onboarding flow that stores user data in Convex and redirects users based on their account type.

## Overview

The onboarding flow consists of 3 steps:
1. **Details** - User enters name and date of birth
2. **Account Type** - User selects Individual or Organization
3. **Connect Wallet** - User connects their Solana wallet and completes setup

After completion, users are automatically redirected to:
- `/studio/user` for Individual accounts
- `/studio/organization` for Organization accounts

## File Structure

```
frontend/
├── convex/
│   ├── schema.ts          # Database schema for users table
│   ├── users.ts           # Convex functions for user CRUD operations
│   └── convex.json        # Convex configuration
├── contexts/
│   └── OnboardContext.tsx # React context to manage onboard form data
├── components/onboard/
│   ├── details.tsx        # Step 1: Personal details form
│   ├── accountType.tsx    # Step 2: Account type selection
│   └── connectWallet.tsx  # Step 3: Wallet connection & data storage
└── app/onboard/
    └── page.tsx           # Main onboarding page with step navigation
```

## Database Schema

The `users` table stores:
- `clerkId` - Clerk user ID for authentication
- `name` - User's full name
- `dateOfBirth` - ISO date string
- `accountType` - "individual" | "organization"
- `walletAddress` - Solana wallet public key
- `email` - User's email (optional)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

## Key Components

### OnboardContext
Manages form data across all 3 steps using React Context:
```typescript
interface OnboardData {
  name: string;
  dateOfBirth: string;
  accountType: "individual" | "organization" | null;
  walletAddress: string;
}
```

### Convex Functions
- `createUser` - Creates or updates user record
- `getUserByClerkId` - Retrieves user by Clerk ID
- `getCurrentUser` - Gets authenticated user

### Flow Logic
1. User fills out details in step 1
2. User selects account type in step 2
3. User connects wallet in step 3
4. On "Complete" click:
   - Data is stored in Convex using `createUser` mutation
   - User is redirected based on `accountType`

## Error Handling

- Loading states during data submission
- Error messages for failed operations
- Form validation before allowing next steps
- Disabled states for incomplete forms

## Usage

1. Ensure Convex is configured with proper environment variables
2. User completes all 3 onboarding steps
3. System automatically stores data and redirects appropriately
4. Users can access their respective dashboards immediately

## Dependencies

- Convex for database operations
- Clerk for authentication
- Solana wallet adapter for wallet connection
- Next.js for routing and navigation