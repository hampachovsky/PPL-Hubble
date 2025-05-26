PPL-Hubble

**PPL-Hubble** is a modern media platform that allows users to create, edit, and share blog posts. Users can interact through comments, likes, and bookmarks, as well as follow each other to stay updated with new content.

## Features

* Create, edit, and publish posts
* Comment on posts and chat with other users
* Like and save articles to your personal bookmarks
* Follow other users and view their content in your feed
* Authentication and role-based access (powered by Supabase)

## Tech Stack

* **Frontend:** React + TypeScript + React-hook-form(with yup)
* **Styles**: TailwindCss
* **State & Data:** React Query
* **Backend / Database:** [Supabase](https://supabase.io) (custom-designed PostgreSQL database and auth)
* **Storage & Realtime:** Supabase Realtime & Storage APIs

## Project Structure

├── config/ # Configuration files, paths, and constants  
├── components/ # Layouts and reusable UI components  
├── hooks/ # General-purpose React hooks  
├── pages/ # Route components (top-level pages)  
├── styles/ # Global CSS styles (e.g. editor overrides)  
├── types/ # TypeScript type definitions  
├── utils/ # Utility and helper functions  
├── api/ # General API service logic (e.g. toggle subscription, like)  
│ # These services are shared and don’t belong to a specific feature  
├── features/ # Domain-specific feature modules  
│ ├── [feature-name]/ # Components, hooks, logic for a specific feature  
│ └── ...
