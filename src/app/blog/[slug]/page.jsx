import { Container, Typography, Box, Button, Divider } from "@mui/material";
import { ArrowBack, WhatsApp } from "@mui/icons-material";
import Link from "next/link";
import { blogs } from "../../data/blogData";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <Container sx={{ py: 10 }}><Typography variant="h4">Post Not Found</Typography></Container>;

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Button startIcon={<ArrowBack />} sx={{ mb: 4 }}>Back</Button>
      </Link>
      
      <Typography variant="h2" fontWeight={800} gutterBottom>{blog.title}</Typography>
      <Box component="img" src={blog.image} sx={{ width: '100%', borderRadius: 4, my: 4, height: 400, objectFit: 'cover' }} />
      
      <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
        {blog.content}
      </Typography>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ p: 4, bgcolor: '#f0fff4', borderRadius: 4, border: '1px solid #25D366', textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold">Join our WhatsApp Channel</Typography>
        <Typography variant="body1" mb={3}>Get real-time spice market inventory and price updates.</Typography>
        <Button variant="contained" href="https://whatsapp.com/channel/0029VbBqojG96H4MQclTBM3G" target="_blank" startIcon={<WhatsApp />} sx={{ bgcolor: "#25D366", fontWeight: 'bold' }}>
          Join Now
        </Button>
      </Box>
    </Container>
  );
}