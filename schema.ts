export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      brands: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      invoice: {
        Row: {
          amount: number
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          quote_id: number
          reference: string
        }
        Insert: {
          amount?: number
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          quote_id?: number
          reference?: string
        }
        Update: {
          amount?: number
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          quote_id?: number
          reference?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoice_quote_id_fkey"
            columns: ["quote_id"]
            referencedRelation: "quotes"
            referencedColumns: ["id"]
          }
        ]
      }
      leads: {
        Row: {
          bathtubs: number
          city: string
          created_at: string
          email: string
          firstName: string
          flowRate: number
          id: number
          installation: boolean
          lastName: string
          phoneNumber: string
          showers: number
          sinks: number
          streetAddress: string
          suburb: string
        }
        Insert: {
          bathtubs?: number
          city?: string
          created_at?: string
          email?: string
          firstName?: string
          flowRate?: number
          id?: number
          installation?: boolean
          lastName?: string
          phoneNumber?: string
          showers?: number
          sinks?: number
          streetAddress?: string
          suburb?: string
        }
        Update: {
          bathtubs?: number
          city?: string
          created_at?: string
          email?: string
          firstName?: string
          flowRate?: number
          id?: number
          installation?: boolean
          lastName?: string
          phoneNumber?: string
          showers?: number
          sinks?: number
          streetAddress?: string
          suburb?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          content: string
          created_at: string
          id: number
          image: string
          title: string
          url: string
        }
        Insert: {
          content?: string
          created_at?: string
          id?: number
          image?: string
          title?: string
          url?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          image?: string
          title?: string
          url?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          city: string
          created_at: string
          email: string
          firstName: string
          id: string
          lastName: string
          orderItems: Json
          orderTotal: number
          paid: boolean
          postalCode: string
          shippingCost: number
          status: string
          streetAddress: string
          subtotal: number
          suburb: string
          transaction_id: string
          user_id: string
        }
        Insert: {
          city?: string
          created_at?: string
          email?: string
          firstName?: string
          id?: string
          lastName?: string
          orderItems?: Json
          orderTotal?: number
          paid?: boolean
          postalCode?: string
          shippingCost?: number
          status?: string
          streetAddress?: string
          subtotal?: number
          suburb?: string
          transaction_id?: string
          user_id?: string
        }
        Update: {
          city?: string
          created_at?: string
          email?: string
          firstName?: string
          id?: string
          lastName?: string
          orderItems?: Json
          orderTotal?: number
          paid?: boolean
          postalCode?: string
          shippingCost?: number
          status?: string
          streetAddress?: string
          subtotal?: number
          suburb?: string
          transaction_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          brand_id: string
          created_at: string
          depth: number
          description: string
          featured: boolean
          flowRate: number
          height: number
          id: string
          image: string
          installationCost: number
          inStock: boolean
          location: string
          maxPressure: number
          maxTemp: number
          minPressure: number
          name: string
          price: number
          sku: string
          weight: string
          width: number
        }
        Insert: {
          brand_id?: string
          created_at?: string
          depth?: number
          description?: string
          featured?: boolean
          flowRate?: number
          height?: number
          id?: string
          image?: string
          installationCost?: number
          inStock?: boolean
          location?: string
          maxPressure?: number
          maxTemp?: number
          minPressure?: number
          name?: string
          price?: number
          sku?: string
          weight?: string
          width?: number
        }
        Update: {
          brand_id?: string
          created_at?: string
          depth?: number
          description?: string
          featured?: boolean
          flowRate?: number
          height?: number
          id?: string
          image?: string
          installationCost?: number
          inStock?: boolean
          location?: string
          maxPressure?: number
          maxTemp?: number
          minPressure?: number
          name?: string
          price?: number
          sku?: string
          weight?: string
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            referencedRelation: "brands"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          city: string
          created_at: string
          firstName: string
          id: number
          lastName: string
          phoneNumber: string
          status: string
          streetAddress: string
          user_id: string
        }
        Insert: {
          city?: string
          created_at?: string
          firstName?: string
          id?: number
          lastName?: string
          phoneNumber?: string
          status?: string
          streetAddress?: string
          user_id?: string
        }
        Update: {
          city?: string
          created_at?: string
          firstName?: string
          id?: number
          lastName?: string
          phoneNumber?: string
          status?: string
          streetAddress?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      quotes: {
        Row: {
          adults: number
          bathroomSink: number
          bathtub: number
          children: number
          city: string
          comments: string
          completeSolution: boolean
          contactDay: string
          contacted: boolean
          contactTime: string
          created_at: string
          dishwasher: number
          electricGeyser: boolean
          email: string
          financing: string
          firstName: string
          flowRate: number
          gasGeyser: boolean
          gasHeating: boolean
          gasStove: boolean
          gasSupply: string
          gasWaterHeating: boolean
          geyserPrice: number
          geyserSize: number
          houseType: string
          id: number
          installation: string
          installationCost: number
          kitchenSink: number
          lastName: string
          locateOutside: boolean
          monthlySavings: number
          offGrid: boolean
          otherGasUse: string
          otherGeyser: string
          ownership: boolean
          plumbingCost: number
          postalCode: string
          product_id: string
          rainShower: number
          solarGeyser: boolean
          standardShower: number
          streetAddress: string
          suburb: string
          teenagers: number
          telephoneNumber: string
          user_id: string
          washingmachine: number
          yearlySavings: number
        }
        Insert: {
          adults?: number
          bathroomSink?: number
          bathtub?: number
          children?: number
          city?: string
          comments?: string
          completeSolution?: boolean
          contactDay?: string
          contacted?: boolean
          contactTime?: string
          created_at?: string
          dishwasher?: number
          electricGeyser?: boolean
          email?: string
          financing?: string
          firstName?: string
          flowRate?: number
          gasGeyser?: boolean
          gasHeating?: boolean
          gasStove?: boolean
          gasSupply?: string
          gasWaterHeating?: boolean
          geyserPrice?: number
          geyserSize?: number
          houseType?: string
          id?: number
          installation?: string
          installationCost?: number
          kitchenSink?: number
          lastName?: string
          locateOutside?: boolean
          monthlySavings?: number
          offGrid?: boolean
          otherGasUse?: string
          otherGeyser?: string
          ownership?: boolean
          plumbingCost?: number
          postalCode?: string
          product_id?: string
          rainShower?: number
          solarGeyser?: boolean
          standardShower?: number
          streetAddress?: string
          suburb?: string
          teenagers?: number
          telephoneNumber?: string
          user_id?: string
          washingmachine?: number
          yearlySavings?: number
        }
        Update: {
          adults?: number
          bathroomSink?: number
          bathtub?: number
          children?: number
          city?: string
          comments?: string
          completeSolution?: boolean
          contactDay?: string
          contacted?: boolean
          contactTime?: string
          created_at?: string
          dishwasher?: number
          electricGeyser?: boolean
          email?: string
          financing?: string
          firstName?: string
          flowRate?: number
          gasGeyser?: boolean
          gasHeating?: boolean
          gasStove?: boolean
          gasSupply?: string
          gasWaterHeating?: boolean
          geyserPrice?: number
          geyserSize?: number
          houseType?: string
          id?: number
          installation?: string
          installationCost?: number
          kitchenSink?: number
          lastName?: string
          locateOutside?: boolean
          monthlySavings?: number
          offGrid?: boolean
          otherGasUse?: string
          otherGeyser?: string
          ownership?: boolean
          plumbingCost?: number
          postalCode?: string
          product_id?: string
          rainShower?: number
          solarGeyser?: boolean
          standardShower?: number
          streetAddress?: string
          suburb?: string
          teenagers?: number
          telephoneNumber?: string
          user_id?: string
          washingmachine?: number
          yearlySavings?: number
        }
        Relationships: [
          {
            foreignKeyName: "quotes_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotes_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      xero: {
        Row: {
          access_token: string
          created_at: string
          id: number
          id_token: string
          refresh_token: string
          scope: string
          session_state: string
          token_type: string
        }
        Insert: {
          access_token?: string
          created_at?: string
          id?: number
          id_token?: string
          refresh_token?: string
          scope?: string
          session_state?: string
          token_type?: string
        }
        Update: {
          access_token?: string
          created_at?: string
          id?: number
          id_token?: string
          refresh_token?: string
          scope?: string
          session_state?: string
          token_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      flowrate_counts: {
        Row: {
          count: number | null
          flowrate: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_flowrate_counts: {
        Args: Record<PropertyKey, never>
        Returns: {
          flowrate: number
          count: number
        }[]
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
