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
        Relationships: [
          {
            foreignKeyName: "admins_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
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
          content: string
          created_at: string
          embeddings: string
          id: number
          item_id: string
          slug: string
          title: string
          type: Database["public"]["Enums"]["content_type"]
        }
        Insert: {
          content: string
          created_at?: string
          embeddings: string
          id?: number
          item_id: string
          slug: string
          title: string
          type: Database["public"]["Enums"]["content_type"]
        }
        Update: {
          content?: string
          created_at?: string
          embeddings?: string
          id?: number
          item_id?: string
          slug?: string
          title?: string
          type?: Database["public"]["Enums"]["content_type"]
        }
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "orders_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
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
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      quotes: {
        Row: {
          adults: number;
          bathroomSink: number;
          bathtub: number;
          children: number;
          city: string;
          comments: string;
          completeSolution: boolean | null;
          contactDay: string | null;
          contacted: boolean;
          contactTime: string | null;
          created_at: string;
          dishwasher: number;
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
          borehole_water: boolean;
        };
        Insert: {
          adults?: number;
          bathroomSink?: number;
          bathtub: number;
          children?: number;
          city?: string;
          comments?: string;
          completeSolution?: boolean | null;
          contactDay?: string | null;
          contacted?: boolean;
          contactTime?: string | null;
          created_at?: string;
          dishwasher: number;
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
          borehole_water?: boolean;
        };
        Update: {
          adults?: number;
          bathroomSink?: number;
          bathtub?: number;
          children?: number;
          city?: string;
          comments?: string;
          completeSolution?: boolean | null;
          contactDay?: string | null;
          contacted?: boolean;
          contactTime?: string | null;
          created_at?: string;
          dishwasher?: number;
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
          borehole_water?: boolean;
        };
        Relationships: [
          {
            foreignKeyName: "quotes_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "quotes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
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
    };
    Enums: {
      content_type: "product" | "article" | "content"
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
  ? R
  : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I;
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I;
  }
  ? I
  : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U;
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U;
  }
  ? U
  : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
