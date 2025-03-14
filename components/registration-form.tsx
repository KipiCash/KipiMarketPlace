"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Su nombre debe contener al menos 2 caracteres",
  }),
  lastName: z.string().min(2, {
    message: "Su apellido debe contener al menos 2 caracteres",
  }),
  email: z.string().email({
    message: "Por favor ingrese un correo valido",
  }),
  phone: z.string().min(9, {
    message: "Ingrese un numero telefonico correcto",
  }),
  userType: z.enum(["customer", "business"], {
    required_error: "Por favor seleccione que tipo de persona es",
  }),
    businessType: z.string().optional(),
})
  .superRefine((data, ctx) => {
    // Accedemos directamente a los valores del formulario a través de `data`
    const { userType, businessType } = data;

    // Si el tipo de usuario es "business", validamos el campo businessType
    if (userType === "business") {
      if (!businessType || businessType.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El tipo de negocio debe tener al menos 3 caracteres",
          path: ["businessType"], // Especificamos que el error es en el campo "businessType"
        });
      }
    }

})


export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [userType, setUserType] = useState("customer") // Estado para manejar el tipo de usuario

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "customer",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    // Simular llamada a API
    try {
      // Aquí deberías hacer la llamada a tu API para guardar los datos en la base de datos.
      // Ejemplo con fetch:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   body: JSON.stringify(values),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      // const data = await response.json()
      // if (data.success) {
      //   setIsSuccess(true)
      // }

      console.log(values); // Para simular que los datos han sido enviados
      setIsSubmitting(false)
      setIsSuccess(true)
    } catch (error) {
      console.error("Error:", error)
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center py-6">
        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold">Registration Successful!</h3>
        <p className="text-muted-foreground">Thank you for registering. We'll be in touch soon with next steps.</p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSuccess(false)
            form.reset()
          }}
        >
          Registrar otro
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Contactanos ahora</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Nombres" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Apellidos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electronico</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero de celular</FormLabel>
              <FormControl>
                <Input placeholder="999 999 999" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Quiero ser un:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    field.onChange(value)
                    setUserType(value) // Actualiza el tipo de usuario
                  }}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="customer" />
                    <Label htmlFor="customer">Cliente</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Negocio</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Solo mostramos este campo si el tipo de usuario es "Negocio" */}
        {userType === "business" && (
          <FormField
            control={form.control}
            name="businessType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>¿Qué vende?</FormLabel>
                <FormControl>
                  <Input placeholder="Tipo de negocio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Cargando...
            </>
          ) : (
            "Enviar"
          )}
        </Button>
      </form>
    </Form>
  )
}
