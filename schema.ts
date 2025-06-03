export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string | null;
          id: string;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
        };
        Relationships: [];
      };
      appointment_notes: {
        Row: {
          appointment_id: number;
          created_at: string;
          id: number;
          note: string;
        };
        Insert: {
          appointment_id: number;
          created_at?: string;
          id?: number;
          note: string;
        };
        Update: {
          appointment_id?: number;
          created_at?: string;
          id?: number;
          note?: string;
        };
        Relationships: [
          {
            foreignKeyName: "appointment_notes_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
        ];
      };
      appointments: {
        Row: {
          created_at: string;
          date: string;
          id: number;
          installer: number;
          quote_id: number;
          time: string | null;
        };
        Insert: {
          created_at?: string;
          date: string;
          id?: number;
          installer: number;
          quote_id: number;
          time?: string | null;
        };
        Update: {
          created_at?: string;
          date?: string;
          id?: number;
          installer?: number;
          quote_id?: number;
          time?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "appointments_installer_fkey";
            columns: ["installer"];
            isOneToOne: false;
            referencedRelation: "installer";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "appointments_quote_id_fkey";
            columns: ["quote_id"];
            isOneToOne: false;
            referencedRelation: "quotes";
            referencedColumns: ["id"];
          },
        ];
      };
      brands: {
        Row: {
          created_at: string | null;
          id: string;
          name: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          name?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string | null;
        };
        Relationships: [];
      };
      cities: {
        Row: {
          created_at: string;
          id: number;
          name: string;
          slug: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
          slug: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
          slug?: string;
        };
        Relationships: [];
      };
      embeddings: {
        Row: {
          content: string;
          created_at: string;
          embeddings: string;
          id: number;
          item_id: string;
          slug: string;
          title: string;
          type: Database["public"]["Enums"]["content_type"];
        };
        Insert: {
          content: string;
          created_at?: string;
          embeddings: string;
          id?: number;
          item_id: string;
          slug: string;
          title: string;
          type: Database["public"]["Enums"]["content_type"];
        };
        Update: {
          content?: string;
          created_at?: string;
          embeddings?: string;
          id?: number;
          item_id?: string;
          slug?: string;
          title?: string;
          type?: Database["public"]["Enums"]["content_type"];
        };
        Relationships: [];
      };
      installations: {
        Row: {
          appointment_id: number;
          created_at: string;
          deposit_paid: boolean;
          geyser: Json;
          id: number;
          installer_id: number;
          quote_id: number;
          total_cost: number;
          total_paid: boolean;
        };
        Insert: {
          appointment_id: number;
          created_at?: string;
          deposit_paid?: boolean;
          geyser: Json;
          id?: number;
          installer_id: number;
          quote_id: number;
          total_cost: number;
          total_paid?: boolean;
        };
        Update: {
          appointment_id?: number;
          created_at?: string;
          deposit_paid?: boolean;
          geyser?: Json;
          id?: number;
          installer_id?: number;
          quote_id?: number;
          total_cost?: number;
          total_paid?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "installations_appointment_id_fkey";
            columns: ["appointment_id"];
            isOneToOne: false;
            referencedRelation: "appointments";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "installations_installer_id_fkey";
            columns: ["installer_id"];
            isOneToOne: false;
            referencedRelation: "installer";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "installations_quote_id_fkey";
            columns: ["quote_id"];
            isOneToOne: false;
            referencedRelation: "quotes";
            referencedColumns: ["id"];
          },
        ];
      };
      installer: {
        Row: {
          created_at: string;
          email: string;
          id: number;
          name: string;
          service_area: string;
          tel: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: number;
          name: string;
          service_area: string;
          tel: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: number;
          name?: string;
          service_area?: string;
          tel?: string;
        };
        Relationships: [];
      };
      invoice: {
        Row: {
          amount: number | null;
          created_at: string | null;
          email: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          quote_id: number | null;
          reference: string | null;
        };
        Insert: {
          amount?: number | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          quote_id?: number | null;
          reference?: string | null;
        };
        Update: {
          amount?: number | null;
          created_at?: string | null;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          quote_id?: number | null;
          reference?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "invoice_quote_id_fkey";
            columns: ["quote_id"];
            isOneToOne: false;
            referencedRelation: "quotes";
            referencedColumns: ["id"];
          },
        ];
      };
      leads: {
        Row: {
          bathtubs: number | null;
          city: string | null;
          created_at: string | null;
          email: string | null;
          firstName: string | null;
          flowRate: number | null;
          id: number;
          installation: boolean | null;
          lastName: string | null;
          phoneNumber: string | null;
          showers: number | null;
          sinks: number | null;
          streetAddress: string | null;
          suburb: string | null;
        };
        Insert: {
          bathtubs?: number | null;
          city?: string | null;
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          flowRate?: number | null;
          id?: number;
          installation?: boolean | null;
          lastName?: string | null;
          phoneNumber?: string | null;
          showers?: number | null;
          sinks?: number | null;
          streetAddress?: string | null;
          suburb?: string | null;
        };
        Update: {
          bathtubs?: number | null;
          city?: string | null;
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          flowRate?: number | null;
          id?: number;
          installation?: boolean | null;
          lastName?: string | null;
          phoneNumber?: string | null;
          showers?: number | null;
          sinks?: number | null;
          streetAddress?: string | null;
          suburb?: string | null;
        };
        Relationships: [];
      };
      news: {
        Row: {
          content: string | null;
          created_at: string | null;
          id: number;
          image: string | null;
          title: string | null;
          url: string | null;
        };
        Insert: {
          content?: string | null;
          created_at?: string | null;
          id?: number;
          image?: string | null;
          title?: string | null;
          url?: string | null;
        };
        Update: {
          content?: string | null;
          created_at?: string | null;
          id?: number;
          image?: string | null;
          title?: string | null;
          url?: string | null;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          city: string | null;
          created_at: string | null;
          email: string | null;
          firstName: string | null;
          id: string;
          lastName: string | null;
          orderItems: Json | null;
          orderTotal: number | null;
          paid: boolean | null;
          postalCode: string | null;
          shippingCost: number | null;
          status: string | null;
          streetAddress: string | null;
          subtotal: number | null;
          suburb: string | null;
          transaction_id: string | null;
          user_id: string | null;
        };
        Insert: {
          city?: string | null;
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          orderItems?: Json | null;
          orderTotal?: number | null;
          paid?: boolean | null;
          postalCode?: string | null;
          shippingCost?: number | null;
          status?: string | null;
          streetAddress?: string | null;
          subtotal?: number | null;
          suburb?: string | null;
          transaction_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          city?: string | null;
          created_at?: string | null;
          email?: string | null;
          firstName?: string | null;
          id?: string;
          lastName?: string | null;
          orderItems?: Json | null;
          orderTotal?: number | null;
          paid?: boolean | null;
          postalCode?: string | null;
          shippingCost?: number | null;
          status?: string | null;
          streetAddress?: string | null;
          subtotal?: number | null;
          suburb?: string | null;
          transaction_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      products: {
        Row: {
          brand_id: string | null;
          created_at: string | null;
          depth: number | null;
          description: string | null;
          featured: boolean | null;
          flowRate: number | null;
          height: number | null;
          id: string;
          image: string | null;
          installationCost: number | null;
          inStock: boolean;
          location: string | null;
          maxPressure: number | null;
          maxTemp: number | null;
          minPressure: number | null;
          name: string | null;
          price: number | null;
          sku: string | null;
          weight: string | null;
          width: number | null;
        };
        Insert: {
          brand_id?: string | null;
          created_at?: string | null;
          depth?: number | null;
          description?: string | null;
          featured?: boolean | null;
          flowRate?: number | null;
          height?: number | null;
          id?: string;
          image?: string | null;
          installationCost?: number | null;
          inStock?: boolean;
          location?: string | null;
          maxPressure?: number | null;
          maxTemp?: number | null;
          minPressure?: number | null;
          name?: string | null;
          price?: number | null;
          sku?: string | null;
          weight?: string | null;
          width?: number | null;
        };
        Update: {
          brand_id?: string | null;
          created_at?: string | null;
          depth?: number | null;
          description?: string | null;
          featured?: boolean | null;
          flowRate?: number | null;
          height?: number | null;
          id?: string;
          image?: string | null;
          installationCost?: number | null;
          inStock?: boolean;
          location?: string | null;
          maxPressure?: number | null;
          maxTemp?: number | null;
          minPressure?: number | null;
          name?: string | null;
          price?: number | null;
          sku?: string | null;
          weight?: string | null;
          width?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "brands";
            referencedColumns: ["id"];
          },
        ];
      };
      profile: {
        Row: {
          city: string | null;
          created_at: string | null;
          firstName: string | null;
          id: number;
          lastName: string | null;
          phoneNumber: string | null;
          status: string | null;
          streetAddress: string | null;
          user_id: string | null;
        };
        Insert: {
          city?: string | null;
          created_at?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
          phoneNumber?: string | null;
          status?: string | null;
          streetAddress?: string | null;
          user_id?: string | null;
        };
        Update: {
          city?: string | null;
          created_at?: string | null;
          firstName?: string | null;
          id?: number;
          lastName?: string | null;
          phoneNumber?: string | null;
          status?: string | null;
          streetAddress?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      quotes: {
        Row: {
          adults: number;
          bathrooms: number | null;
          bathroomSink: number;
          bathtub: number;
          borehole_water: boolean | null;
          children: number;
          city: string;
          comments: string;
          completeSolution: boolean | null;
          contactDay: string | null;
          contacted: boolean;
          contactTime: string | null;
          cottage_bathrooms: number | null;
          cottageIncluded: boolean | null;
          created_at: string;
          dishwasher: number;
          electric_geysers: number | null;
          electricGeyser: boolean | null;
          email: string;
          financing: string;
          firstName: string;
          flowRate: number;
          gasGeyser: boolean | null;
          gasHeating: boolean | null;
          gasStove: boolean | null;
          gasSupply: string;
          gasWaterHeating: boolean | null;
          geyserPrice: number | null;
          geyserSize: number | null;
          houseType: string;
          id: number;
          installation: string | null;
          installationCost: number | null;
          kitchenSink: number;
          lastName: string;
          locateOutside: boolean | null;
          monthlySavings: number;
          offGrid: boolean | null;
          otherGasUse: string | null;
          otherGeyser: string | null;
          ownership: boolean;
          plumbingCost: number | null;
          postalCode: string;
          product_id: string | null;
          rainShower: number;
          solarGeyser: boolean | null;
          source: string | null;
          standardShower: number;
          streetAddress: string;
          suburb: string;
          teenagers: number;
          telephoneNumber: string;
          user_id: string | null;
          washingmachine: number;
          yearlySavings: number;
        };
        Insert: {
          adults?: number;
          bathrooms?: number | null;
          bathroomSink?: number;
          bathtub: number;
          borehole_water?: boolean | null;
          children?: number;
          city?: string;
          comments?: string;
          completeSolution?: boolean | null;
          contactDay?: string | null;
          contacted?: boolean;
          contactTime?: string | null;
          cottage_bathrooms?: number | null;
          cottageIncluded?: boolean | null;
          created_at?: string;
          dishwasher: number;
          electric_geysers?: number | null;
          electricGeyser?: boolean | null;
          email: string;
          financing?: string;
          firstName: string;
          flowRate: number;
          gasGeyser?: boolean | null;
          gasHeating?: boolean | null;
          gasStove?: boolean | null;
          gasSupply: string;
          gasWaterHeating?: boolean | null;
          geyserPrice?: number | null;
          geyserSize?: number | null;
          houseType: string;
          id?: number;
          installation?: string | null;
          installationCost?: number | null;
          kitchenSink: number;
          lastName: string;
          locateOutside?: boolean | null;
          monthlySavings?: number;
          offGrid?: boolean | null;
          otherGasUse?: string | null;
          otherGeyser?: string | null;
          ownership: boolean;
          plumbingCost?: number | null;
          postalCode?: string;
          product_id?: string | null;
          rainShower: number;
          solarGeyser?: boolean | null;
          source?: string | null;
          standardShower: number;
          streetAddress: string;
          suburb?: string;
          teenagers?: number;
          telephoneNumber: string;
          user_id?: string | null;
          washingmachine: number;
          yearlySavings?: number;
        };
        Update: {
          adults?: number;
          bathrooms?: number | null;
          bathroomSink?: number;
          bathtub?: number;
          borehole_water?: boolean | null;
          children?: number;
          city?: string;
          comments?: string;
          completeSolution?: boolean | null;
          contactDay?: string | null;
          contacted?: boolean;
          contactTime?: string | null;
          cottage_bathrooms?: number | null;
          cottageIncluded?: boolean | null;
          created_at?: string;
          dishwasher?: number;
          electric_geysers?: number | null;
          electricGeyser?: boolean | null;
          email?: string;
          financing?: string;
          firstName?: string;
          flowRate?: number;
          gasGeyser?: boolean | null;
          gasHeating?: boolean | null;
          gasStove?: boolean | null;
          gasSupply?: string;
          gasWaterHeating?: boolean | null;
          geyserPrice?: number | null;
          geyserSize?: number | null;
          houseType?: string;
          id?: number;
          installation?: string | null;
          installationCost?: number | null;
          kitchenSink?: number;
          lastName?: string;
          locateOutside?: boolean | null;
          monthlySavings?: number;
          offGrid?: boolean | null;
          otherGasUse?: string | null;
          otherGeyser?: string | null;
          ownership?: boolean;
          plumbingCost?: number | null;
          postalCode?: string;
          product_id?: string | null;
          rainShower?: number;
          solarGeyser?: boolean | null;
          source?: string | null;
          standardShower?: number;
          streetAddress?: string;
          suburb?: string;
          teenagers?: number;
          telephoneNumber?: string;
          user_id?: string | null;
          washingmachine?: number;
          yearlySavings?: number;
        };
        Relationships: [
          {
            foreignKeyName: "quotes_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      xero: {
        Row: {
          access_token: string | null;
          created_at: string | null;
          id: number;
          id_token: string | null;
          refresh_token: string | null;
          scope: string | null;
          session_state: string | null;
          token_type: string | null;
        };
        Insert: {
          access_token?: string | null;
          created_at?: string | null;
          id?: number;
          id_token?: string | null;
          refresh_token?: string | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
        };
        Update: {
          access_token?: string | null;
          created_at?: string | null;
          id?: number;
          id_token?: string | null;
          refresh_token?: string | null;
          scope?: string | null;
          session_state?: string | null;
          token_type?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      flowrate_counts: {
        Row: {
          count: number | null;
          flowrate: number | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      get_flowrate_counts: {
        Args: Record<PropertyKey, never>;
        Returns: {
          flowrate: number;
          count: number;
        }[];
      };
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      query_embeddings: {
        Args: { embedding: string; match_threshold: number };
        Returns: {
          content: string;
          created_at: string;
          embeddings: string;
          id: number;
          item_id: string;
          slug: string;
          title: string;
          type: Database["public"]["Enums"]["content_type"];
        }[];
      };
      search_content: {
        Args: {
          query_embedding: string;
          similarity_threshold: number;
          match_count: number;
        };
        Returns: {
          id: number;
          item_id: string;
          slug: string;
          content: string;
          title: string;
          type: Database["public"]["Enums"]["content_type"];
          similarity: number;
        }[];
      };
    };
    Enums: {
      content_type: "product" | "article" | "content";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          level: number | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          user_metadata: Json | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          level?: number | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          level?: number | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          user_metadata?: Json | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      prefixes: {
        Row: {
          bucket_id: string;
          created_at: string | null;
          level: number;
          name: string;
          updated_at: string | null;
        };
        Insert: {
          bucket_id: string;
          created_at?: string | null;
          level?: number;
          name: string;
          updated_at?: string | null;
        };
        Update: {
          bucket_id?: string;
          created_at?: string | null;
          level?: number;
          name?: string;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "prefixes_bucketId_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads: {
        Row: {
          bucket_id: string;
          created_at: string;
          id: string;
          in_progress_size: number;
          key: string;
          owner_id: string | null;
          upload_signature: string;
          user_metadata: Json | null;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          id: string;
          in_progress_size?: number;
          key: string;
          owner_id?: string | null;
          upload_signature: string;
          user_metadata?: Json | null;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          id?: string;
          in_progress_size?: number;
          key?: string;
          owner_id?: string | null;
          upload_signature?: string;
          user_metadata?: Json | null;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
        ];
      };
      s3_multipart_uploads_parts: {
        Row: {
          bucket_id: string;
          created_at: string;
          etag: string;
          id: string;
          key: string;
          owner_id: string | null;
          part_number: number;
          size: number;
          upload_id: string;
          version: string;
        };
        Insert: {
          bucket_id: string;
          created_at?: string;
          etag: string;
          id?: string;
          key: string;
          owner_id?: string | null;
          part_number: number;
          size?: number;
          upload_id: string;
          version: string;
        };
        Update: {
          bucket_id?: string;
          created_at?: string;
          etag?: string;
          id?: string;
          key?: string;
          owner_id?: string | null;
          part_number?: number;
          size?: number;
          upload_id?: string;
          version?: string;
        };
        Relationships: [
          {
            foreignKeyName: "s3_multipart_uploads_parts_bucket_id_fkey";
            columns: ["bucket_id"];
            isOneToOne: false;
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "s3_multipart_uploads_parts_upload_id_fkey";
            columns: ["upload_id"];
            isOneToOne: false;
            referencedRelation: "s3_multipart_uploads";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      add_prefixes: {
        Args: { _bucket_id: string; _name: string };
        Returns: undefined;
      };
      can_insert_object: {
        Args: { bucketid: string; name: string; owner: string; metadata: Json };
        Returns: undefined;
      };
      delete_prefix: {
        Args: { _bucket_id: string; _name: string };
        Returns: boolean;
      };
      extension: {
        Args: { name: string };
        Returns: string;
      };
      filename: {
        Args: { name: string };
        Returns: string;
      };
      foldername: {
        Args: { name: string };
        Returns: string[];
      };
      get_level: {
        Args: { name: string };
        Returns: number;
      };
      get_prefix: {
        Args: { name: string };
        Returns: string;
      };
      get_prefixes: {
        Args: { name: string };
        Returns: string[];
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      list_multipart_uploads_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          next_key_token?: string;
          next_upload_token?: string;
        };
        Returns: {
          key: string;
          id: string;
          created_at: string;
        }[];
      };
      list_objects_with_delimiter: {
        Args: {
          bucket_id: string;
          prefix_param: string;
          delimiter_param: string;
          max_keys?: number;
          start_after?: string;
          next_token?: string;
        };
        Returns: {
          name: string;
          id: string;
          metadata: Json;
          updated_at: string;
        }[];
      };
      operation: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
      search_legacy_v1: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
      search_v1_optimised: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
      search_v2: {
        Args: {
          prefix: string;
          bucket_name: string;
          limits?: number;
          levels?: number;
          start_after?: string;
        };
        Returns: {
          key: string;
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      content_type: ["product", "article", "content"],
    },
  },
  storage: {
    Enums: {},
  },
} as const;
