Imports System
Imports System.Data.Entity.Migrations
Imports Microsoft.VisualBasic

Namespace Migrations
    Public Partial Class FirstName
        Inherits DbMigration
    
        Public Overrides Sub Up()
            AddColumn("dbo.AspNetUsers", "FirstName", Function(c) c.String())
        End Sub
        
        Public Overrides Sub Down()
            DropColumn("dbo.AspNetUsers", "FirstName")
        End Sub
    End Class
End Namespace
