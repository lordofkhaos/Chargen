Imports System.Text
Imports System.IO

Module Module1

	Sub Main()
		Console.WriteLine("Opening vb-rt.txt")
		'Beginning log
		Dim log As StreamWriter
		log = My.Computer.FileSystem.OpenTextFileWriter("log.txt", True)
		Dim sttime As String = DateTime.Now.ToString("yyyyMMdd_HHmmss")
		log.WriteLine("Starting character generation at " + sttime)
		'Generate random character
		Dim chars As String = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()_+{}[],.<>?"
		Dim r As New Random
		Dim rt As StreamWriter
		rt = My.Computer.FileSystem.OpenTextFileWriter(sttime + "-vb-rt.txt", False)
		For i As Integer = 1 To 100000
			For x As Integer = 1 To 100000
				Dim idx As Integer = r.Next(0, Len(chars))
				rt.Write(chars.Substring(idx, 1))
			Next
			Console.WriteLine("Writing string " + i.ToString())
		Next
		'Ending log
		Dim entime As String = DateTime.Now.ToString("yyyyMMdd_HHmmss")
		log.WriteLine("Ending character generation at " + entime)
		log.Close()
		Console.ReadKey()
	End Sub

End Module
